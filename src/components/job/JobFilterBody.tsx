"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Stack, Text, Grid, Group } from "@mantine/core";
import { DateInput } from "@mantine/dates";

import IproButton from "@/components/core/IproButton";
import { JobListModel } from "@/lib/models/job.model";
import { getTechniciansApi } from "@/lib/services/api/user.service";
import { getCustomerListApi } from "@/lib/services/api/customer.service";
import { getJobStatusListApi } from "@/lib/services/api/job-status.service";
import IproCombobox, { IproComboboxItem } from "@/components/core/IproCombobox";
import { getProblemTypeListApi } from "@/lib/services/api/problem-type.service";
import { AppliedFiltersType } from "../common/Table";
import { showDateNicely } from "@/utils/functions";

const JobFilterBody = ({
  jobs,
  close,
  appliedFilters,
  setFilteredJobs,
  setAppliedFilters
}: {
  jobs: JobListModel;
  close: () => void;
  appliedFilters: AppliedFiltersType[];
  setFilteredJobs: Dispatch<SetStateAction<JobListModel>>;
  setAppliedFilters: Dispatch<SetStateAction<AppliedFiltersType[]>>;
}) => {
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [startDate, setStateDate] = useState<Date | null>(null);
  const [endDateError, setEndDateError] = useState<string>("");
  const [startDateError, setStateDateError] = useState<string>("");

  // Select filters states
  const [jobTypeValue, setJobTypeValue] = useState<IproComboboxItem[]>([]);
  const [jobTypeOptions, setJobTypeOptions] = useState<IproComboboxItem[]>([]);
  const [customerValue, setCustomerValue] = useState<IproComboboxItem[]>([]);
  const [customerOptions, setCustomerOptions] = useState<IproComboboxItem[]>([]);
  const [technicianValue, setTechnicianValue] = useState<IproComboboxItem[]>([]);
  const [technicianOptions, setTechnicianOptions] = useState<IproComboboxItem[]>([]);
  const [jobStatusValue, setJobStatusValue] = useState<IproComboboxItem[]>([]);
  const [jobStatusOptions, setJobStatusOptions] = useState<IproComboboxItem[]>([]);

  const getJobTypeData = async () => {
    const result = await getProblemTypeListApi();
    setJobTypeOptions(
      result.map((item) => ({
        label: item.name,
        value: String(item.id)
      }))
    );
  };

  const getCustomersData = async () => {
    const result = await getCustomerListApi();
    setCustomerOptions(
      result.map((item) => ({
        label: item.name,
        value: item.id
      }))
    );
  };

  const getTechnicianData = async () => {
    const result = await getTechniciansApi();
    setTechnicianOptions(
      result.map((item) => ({
        label: `${item.first_name} ${item.last_name}`,
        value: item.id
      }))
    );
  };

  const getJobStatusData = async () => {
    const result = await getJobStatusListApi();
    setJobStatusOptions(
      result.map((item) => ({
        label: item.name,
        value: String(item.id)
      }))
    );
  };

  const applyFiltersHandler = () => {
    const filteredJobs = [...jobs];

    if (!!startDate) {
      setAppliedFilters((filters) => {
        const otherFilters = filters.filter((item) => item.name !== "Start");

        const updatedFilters = {
          name: "Start",
          value: showDateNicely(startDate.toISOString()).split(" ")[0],
          data: startDate
        };

        return [...otherFilters, updatedFilters];
      });
    }

    if (!!endDate) {
      setAppliedFilters((filters) => {
        const otherFilters = filters.filter((item) => item.name !== "End");

        const updatedFilters = {
          name: "End",
          value: showDateNicely(endDate.toISOString()).split(" ")[0],
          data: endDate
        };

        return [...otherFilters, updatedFilters];
      });
    }

    if (!!jobTypeValue.length) {
      setAppliedFilters((filters) => {
        const otherFilters = filters.filter((item) => item.name !== "Job Type");

        const updatedFilters = {
          name: "Job Type",
          value: jobTypeValue.reduce(
            (prev, curr, idx) => `${prev}${idx !== 0 ? " |" : ""} ${curr.label}`,
            ""
          ),
          data: jobTypeValue
        };

        return [...otherFilters, updatedFilters];
      });
    }

    if (!!customerValue.length) {
      setAppliedFilters((filters) => {
        const otherFilters = filters.filter((item) => item.name !== "Customer");

        const updatedFilters = {
          name: "Customer",
          value: customerValue.reduce(
            (prev, curr, idx) => `${prev}${idx !== 0 ? " |" : ""} ${curr.label}`,
            ""
          ),
          data: customerValue
        };

        return [...otherFilters, updatedFilters];
      });
    }

    if (!!technicianValue.length) {
      setAppliedFilters((filters) => {
        const otherFilters = filters.filter((item) => item.name !== "Technician");

        const updatedFilters = {
          name: "Technician",
          value: technicianValue.reduce(
            (prev, curr, idx) => `${prev}${idx !== 0 ? " |" : ""} ${curr.label}`,
            ""
          ),
          data: technicianValue
        };

        return [...otherFilters, updatedFilters];
      });
    }

    if (!!jobStatusValue.length) {
      setAppliedFilters((filters) => {
        const otherFilters = filters.filter((item) => item.name !== "Job Status");

        const updatedFilters = {
          name: "Job Status",
          value: jobStatusValue.reduce(
            (prev, curr, idx) => `${prev}${idx !== 0 ? " |" : ""} ${curr.label}`,
            ""
          ),
          data: jobStatusValue
        };

        return [...otherFilters, updatedFilters];
      });
    }

    setFilteredJobs(
      filteredJobs.filter(({ created_at, problem_type, customer, technician, job_status }) => {
        const createdAt = new Date(created_at);

        if (!!startDate && startDate > createdAt) return false;
        if (!!endDate && endDate < createdAt) return false;
        if (jobTypeValue.length) return jobTypeValue.some((j) => j.value === problem_type.id);
        if (customerValue.length) return customerValue.some((j) => j.value === customer.id);
        if (technicianValue.length && technician)
          return technicianValue.some((j) => j.value === technician.id);
        if (jobStatusValue.length)
          return jobStatusValue.some((j) => j.value === String(job_status.id));

        return true;
      })
    );

    close();
  };

  useEffect(() => {
    if (!!appliedFilters.length) {
      const [startFilter] = appliedFilters.filter((item) => item.name === "Start");
      const [endFilter] = appliedFilters.filter((item) => item.name === "End");
      const [jobTypeFilter] = appliedFilters.filter((item) => item.name === "Job Type");
      const [customerFilter] = appliedFilters.filter((item) => item.name === "Customer");
      const [technicianFilter] = appliedFilters.filter((item) => item.name === "Technician");
      const [jobStatusFilter] = appliedFilters.filter((item) => item.name === "Job Status");

      if (startFilter) setStateDate(startFilter.data as Date);
      if (endFilter) setEndDate(endFilter.data as Date);
      if (jobTypeFilter) setJobTypeValue([...(jobTypeFilter.data as IproComboboxItem[])]);
      if (customerFilter) setCustomerValue([...(customerFilter.data as IproComboboxItem[])]);
      if (technicianFilter) setTechnicianValue([...(technicianFilter.data as IproComboboxItem[])]);
      if (jobStatusFilter) setJobStatusValue([...(jobStatusFilter.data as IproComboboxItem[])]);
    }
  }, [appliedFilters]);

  useEffect(() => {
    getJobTypeData();
    getCustomersData();
    getTechnicianData();
    getJobStatusData();
  }, []);

  return (
    <Stack>
      <Text size="sm">
        You can filter jobs with date range job type customer technician status and company name
      </Text>
      <Grid grow>
        <Grid.Col span={6}>
          <DateInput
            size="sm"
            label="Start Date"
            value={startDate}
            onChange={(value) => {
              setStateDateError("");
              if (!!value && !!endDate && value > endDate) {
                setStateDateError("Start date cannot be later than end date.");
              } else {
                setStateDate(value);
              }
            }}
            placeholder="Enter Start Date"
            valueFormat="DD MMM YYYY"
            error={startDateError}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <DateInput
            size="sm"
            label="End Date"
            value={endDate}
            onChange={(value) => {
              setEndDateError("");
              if (!!value && !!startDate && value < startDate) {
                setEndDateError("End date cannot be earlier than start date.");
              } else {
                setEndDate(value);
              }
            }}
            placeholder="Enter End Date"
            valueFormat="DD MMM YYYY"
            error={endDateError}
          />
        </Grid.Col>
      </Grid>
      <Grid grow>
        <Grid.Col span={3}>
          <IproCombobox
            label="Job Type"
            data={jobTypeOptions}
            value={jobTypeValue}
            setValue={setJobTypeValue}
          />
        </Grid.Col>
        <Grid.Col span={3}>
          <IproCombobox
            label="Customer"
            data={customerOptions}
            value={customerValue}
            setValue={setCustomerValue}
          />
        </Grid.Col>
        <Grid.Col span={3}>
          <IproCombobox
            label="Assigned To"
            data={technicianOptions}
            value={technicianValue}
            setValue={setTechnicianValue}
          />
        </Grid.Col>
        <Grid.Col span={3}>
          <IproCombobox
            label="Job Status"
            data={jobStatusOptions}
            value={jobStatusValue}
            setValue={setJobStatusValue}
          />
        </Grid.Col>
      </Grid>
      <Group justify="flex-end">
        <IproButton onClick={applyFiltersHandler}>Apply Filter</IproButton>
      </Group>
    </Stack>
  );
};
export default JobFilterBody;
