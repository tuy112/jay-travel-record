export type ScheduleItem = {
    id: string;
    startTime: string;   // "09:00"
    endTime?: string;    // "10:30"
    place: string;
    memo?: string;
};

export type DaySchedule = {
    date: string;        // "2026-08-01"
    dayLabel: string;    // "1일차"
    items: ScheduleItem[];
};