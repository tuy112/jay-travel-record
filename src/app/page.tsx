'use client'
import { useState } from 'react';

import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';
import Calendar from '../component/Calendar/Calendar';

import ScheduleSection from './schedule/ScheduleSection';
import ListSection from './list/ListSection';
import RecordSection from './travel-record/RecordSection';

import { tripDates } from '@/lib/data/schedule/scheduleData';
import styles from "./page.module.css";

export default function Home() {
    const [activeTab, setActiveTab] = useState<'schedule' | 'list' | 'travel-record'>('schedule');
    const [selectedDate, setSelectedDate] = useState(tripDates[0]);

    return (
        <>
            <Header />

            <main className={styles.travelPage}>
                <div className={styles.travelPageInner}>
                    <section className={styles.travelPageHeader}>
                        <h1>여행 기록방</h1>
                        <p>여행일정+여행기록+정산표 기록방입니다.</p>
                    </section>

                    <Calendar
                        tripDates={tripDates}
                        selectedDate={selectedDate}
                        onSelectDate={setSelectedDate}
                    />

                    <section className={styles.travelPageContent}>
                        {/* 탭 바 */}
                        <div className={styles.tabBar}>
                            <button
                            className={`${styles.tabBtn} ${activeTab === 'schedule' ? styles.tabActive : ''}`}
                            onClick={() => setActiveTab('schedule')}
                            >
                            일정
                            </button>
                            <button
                            className={`${styles.tabBtn} ${activeTab === 'list' ? styles.tabActive : ''}`}
                            onClick={() => setActiveTab('list')}
                            >
                            장보기목록+정산표
                            </button>
                            <button
                            className={`${styles.tabBtn} ${activeTab === 'travel-record' ? styles.tabActive : ''}`}
                            onClick={() => setActiveTab('travel-record')}
                            >
                            여행기록방
                            </button>
                        </div>

                        {/* 여행일정 */}
                        {activeTab === 'schedule' && <ScheduleSection date={selectedDate} />}

                        {/* 장보기목록 + 정산표 */}
                        {activeTab === 'list' && <ListSection date={selectedDate} />}
                        
                        {/* 여행기록방 */}
                        {activeTab === 'travel-record' && <RecordSection />}
                    </section>
                </div>
            </main>

            <Footer />
        </>
    );
}
