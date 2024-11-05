'use client'

import { Text, Grid, Group ,Card, Stack, GridCol, } from "@mantine/core"
import Heading from "../common/Heading"
import IproButton from "../core/IproButton"
import { DateInput } from '@mantine/dates';
import IproTextInput from "../core/IproTextInput"
import '@mantine/dates/styles.css';

const ProfitLossBody = async() => {
    return(
    <Grid>
        <Grid.Col span={12}>
        <Card>   
        <Grid justify="flex-end">
                <Grid.Col span={5}>
                    <DateInput
                    label="Start Date"
                    placeholder="Enter Start Date"
                    valueFormat="YYYY MMM DD"
                    />
                </Grid.Col>
                <Grid.Col span={5}>
                    <DateInput
                        label="End Date"
                        placeholder="Enter End Date"
                        valueFormat="YYYY MMM DD"
                    />
                </Grid.Col>
                <Grid.Col span={2}> 
                    <Stack justify="flex-end" h={60}>
                        <IproButton>
                            Apply Filter
                        </IproButton>
                    </Stack>
                </Grid.Col>
        </Grid>
        </Card> 
        </Grid.Col>
        <Grid.Col span={3}>
            <Card bg="var(--mantine-color-grape-1)">
                <Stack gap="xs">
                    <Text c="grape.8" size="md">
                        Total Sales-Jobs
                    </Text>
                    <Text fw={500} c="grape.8" size="xl">
                        AED 50500
                    </Text>
                </Stack>
            </Card>
        </Grid.Col>
        <Grid.Col span={3}>
            <Card bg="var(--mantine-color-cyan-1)">
                <Stack gap="xs">
                    <Text c="cyan.8" size="md">
                        Total Purchses
                    </Text>
                    <Text fw={500} c="cyan.8" size="xl">
                        AED 55202.25
                    </Text>
                </Stack>
            </Card>
        </Grid.Col>
        <Grid.Col span={3}>
            <Card bg="var(--mantine-color-blue-1)">
                <Stack gap="xs">
                    <Text c="blue.8" size="md">
                        Total Job Loses
                    </Text>
                    <Text fw={500} c="blue.8" size="xl">
                        AED 9529.25
                    </Text>
                </Stack>
            </Card>
        </Grid.Col>
        <Grid.Col span={3}>
            <Card bg="var(--mantine-color-indigo-1)">
                <Stack gap="xs">
                    <Text c="indigo.8" size="md">
                        Total Gross Profit
                    </Text>
                    <Text fw={500} c="indigo.8" size="xl">
                        AED 9529.25
                    </Text>
                </Stack>
            </Card>
        </Grid.Col>
        <Grid.Col span={12}>
        <Heading title="Profit Information" ml={6} my={10} />
        </Grid.Col>
        <Grid.Col span={6}>
            <Card>
                <Stack>
                    <Text size="md"> Profit Total & Margin</Text>
                    
                </Stack> 
            </Card>
        </Grid.Col>
    </Grid>
    )
}

export default ProfitLossBody;