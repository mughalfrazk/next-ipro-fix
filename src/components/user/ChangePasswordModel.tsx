import { useState } from "react";
import IproTextInput from "../core/IproTextInput";
import IproModal from "../core/IproModal";
import { updatePasswordApi } from "@/lib/services/api/user.service";
import { showErrorNotification, showNotification } from "@/utils/functions";
import { getFormattedError } from "@/utils/format-error";

const ChangePasswordModel = ({
  title,
  userId,
  opened,
  onClose
}: {
  title: string;
  userId?: string;
  opened: boolean;
  onClose: () => void;
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [password, setPassword] = useState({
    input: "",
    error: "",
    touched: false
  });

  const [confirmPassword, setConfirmPassword] = useState({
    input: "",
    error: "",
    touched: false
  });

  // ✅ Password validation logic
  const validatePassword = (value: string) => {
    if (!value) return "Password is required";
    if (value.length < 8) return "Password must be at least 8 characters long";
    // if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
    // if (!/[a-z]/.test(value)) return "Password must contain at least one lowercase letter";
    // if (!/[0-9]/.test(value)) return "Password must contain at least one number";
    // if (!/[!@#$%^&*(),.?":{}|<>]/.test(value))
    //   return "Password must contain at least one special character";
    return "";
  };

  const validateConfirmPassword = (value: string, passwordValue: string) => {
    if (!value) return "Please confirm your password";
    if (value !== passwordValue) return "Passwords do not match";
    return "";
  };

  const onPasswordChange = (value: string) => {
    setPassword({
      input: value,
      touched: true,
      error: validatePassword(value)
    });

    // Re-validate confirm password when password changes
    setConfirmPassword((prev) => ({
      ...prev,
      error: prev.touched ? validateConfirmPassword(prev.input, value) : prev.error
    }));
  };

  const onConfirmPasswordChange = (value: string) => {
    setConfirmPassword({
      input: value,
      touched: true,
      error: validateConfirmPassword(value, password.input)
    });
  };

  const onSubmit = async () => {
    const passwordError = validatePassword(password.input);
    const confirmError = validateConfirmPassword(confirmPassword.input, password.input);
    setLoading(true);

    setPassword((prev) => ({ ...prev, touched: true, error: passwordError }));
    setConfirmPassword((prev) => ({ ...prev, touched: true, error: confirmError }));

    if (passwordError || confirmError || !userId) return;

    try {
      await updatePasswordApi(userId, password.input);
      showNotification("Password updated successfully");
      onClose();
    } catch (error) {
      showErrorNotification(getFormattedError(error).errors.formErrors?.[0]);
      console.log("Error: ", getFormattedError(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <IproModal
      title={title}
      opened={opened}
      onClose={onClose}
      moveFormard={onSubmit}
      confirmButtonLoading={loading}
      pos="relative"
    >
      <IproTextInput
        name="new_password"
        label="New Password"
        type="password"
        value={password.input}
        onChange={(e) => onPasswordChange(e.target.value)}
        error={password.touched && password.error ? password.error : ""}
        mb={15}
      />

      <IproTextInput
        name="confirm_password"
        label="Confirm Password"
        type="password"
        value={confirmPassword.input}
        onChange={(e) => onConfirmPasswordChange(e.target.value)}
        error={confirmPassword.touched && confirmPassword.error ? confirmPassword.error : ""}
        mb={15}
      />
    </IproModal>
  );
};

export default ChangePasswordModel;
