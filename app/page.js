import Link from 'next/link';
import Button from '@/components/Button';

export default function Home() {

  const buttonclick = () => {
    window.location.href = '/notes';
  }
  return (
    <div>
      <h1>Welcome to College Notes Hub</h1>
      <p>Find and share notes easily with your classmates.</p>
      <Button onclick={buttonclick}>Browse Notes</Button>
    </div>
  );
}
