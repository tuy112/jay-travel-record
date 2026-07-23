'use client'
import { useEffect, useState } from 'react';
import { listData } from '@/lib/data/list/listData';
import styles from './style.module.css';

type Props = {
      date: string;
};

export default function ListSection({ date }: Props) {
      const day = listData.find((d) => d.date === date);
      const [items, setItems] = useState(day?.items ?? []);

      useEffect(() => {
            setItems(day?.items ?? []);
      }, [date]);

      if (!day) {
            return <p className={styles.empty}>해당 날짜의 데이터가 없습니다.</p>;
      }

      const toggleChecked = (id: string) => {
            setItems((prev) =>
                  prev.map((item) =>
                        item.id === id ? { ...item, checked: !item.checked } : item
                  )
            );
      };

      const totalPrice = day.settlements.reduce((sum, s) => sum + s.price, 0);

      return (
            <div className={styles.listWrap}>
                  {/* 장보기목록 */}
                  <section className={styles.card}>
                        <h3 className={styles.sectionTitle}>장보기목록</h3>
                        <table className={styles.table}>
                              <thead>
                                    <tr>
                                          <th className={styles.colCheck}></th>
                                          <th className={styles.colName}>품목</th>
                                          <th className={styles.colQuantity}>수량</th>
                                          <th className={styles.colMemo}>메모</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {items.map((item) => (
                                          <tr key={item.id}>
                                                <td className={styles.colCheck}>
                                                      <input
                                                            type="checkbox"
                                                            checked={item.checked}
                                                            onChange={() => toggleChecked(item.id)}
                                                      />
                                                </td>
                                                <td className={item.checked ? styles.checked : ''}>
                                                      {item.name}
                                                </td>
                                                <td className={styles.colQuantity}>{item.quantity}</td>
                                                <td className={styles.colMemo}>{item.memo}</td>
                                          </tr>
                                    ))}
                              </tbody>
                        </table>
                  </section>

                  {/* 정산표 */}
                  <section className={styles.card}>
                        <h3 className={styles.sectionTitle}>정산표</h3>
                        <table className={styles.table}>
                              <thead>
                                    <tr>
                                          <th className={styles.colName}>항목</th>
                                          <th className={styles.colQuantity}>수량</th>
                                          <th className={styles.colLocation}>구매처</th>
                                          <th className={styles.colPrice}>금액</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {day.settlements.map((s) => (
                                          <tr key={s.id}>
                                                <td>{s.name}</td>
                                                <td className={styles.colQuantity}>{s.quantity}</td>
                                                <td className={styles.colLocation}>{s.location}</td>
                                                <td className={styles.colPrice}>
                                                      {s.price.toLocaleString()}원
                                                </td>
                                          </tr>
                                    ))}
                              </tbody>
                              <tfoot>
                                    <tr>
                                          <td colSpan={3} className={styles.totalLabel}>총 지출</td>
                                          <td className={styles.colPrice}>
                                                {totalPrice.toLocaleString()}원
                                          </td>
                                    </tr>
                              </tfoot>
                        </table>
                  </section>
            </div>
      );
}