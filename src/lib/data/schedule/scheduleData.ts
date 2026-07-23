import { DaySchedule } from '@/lib/types/schedule';

export const scheduleData: DaySchedule[] = [
  {
    date: '2026-07-25',
    dayLabel: '1일차',
    items: [
      { id: '1', startTime: '13:00', endTime: '13:40', place: '단양 하나로마트 장보기', memo: '장보기목록 탭 참고' },
      { id: '2', startTime: '14:00', endTime: '14:50', place: '입실해서 피칭하기' },
      { id: '3', startTime: '15:00', endTime: '18:00', place: '계곡에서 놀기' },
      { id: '4', startTime: '18:00', endTime: '20:00', place: '백숙 + 죽 + 부추전 먹기!' },
      { id: '5', startTime: '20:00', endTime: '22:00', place: '1차치우고 2차 ㄱㄱ (수박화채?)' },
      { id: '6', startTime: '22:00', endTime: '24:00', place: '싹 정리?' },
    ],
  },
  {
    date: '2026-07-26',
    dayLabel: '2일차',
    items: [
      { id: '7', startTime: '10:30', endTime: '11:00', place: '캠핑장 퇴실' },
      { id: '8', startTime: '11:30', endTime: '12:00', place: '근처에서 점심' },
    ],
  },
];

// 달력에 표시할 여행 전체 일자 목록
export const tripDates = scheduleData.map((d) => d.date);