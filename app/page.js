"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import styles from './page.module.css';

export default function Home() {
  const router = useRouter();

  const handleBrowse = () => {
    // Use Next.js router for client-side navigation
    router.push('/notes');
  };

  return (
    <main className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>College Notes Hub</h1>
        <p className={styles.description}>Find and share notes easily with your classmates.</p>

        <div className={styles.actions}>
          <Button onClick={handleBrowse}>Browse Notes</Button>
          <Link href="/upload" className={styles.secondary}>Upload Notes</Link>
        </div>
      </div>
    </main>
  );
}
