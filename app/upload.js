"use client";

import { useState } from 'react';
import styles from './upload.module.css';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_TYPES = [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'text/plain'
];

export default function Upload() {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  const handleFileChange = (e) => {
    setError('');
    const f = e.target.files?.[0] ?? null;
    if (!f) {
      setFile(null);
      return;
    }

    if (f.size > MAX_FILE_SIZE) {
      setError('File is too large. Max size is 10MB.');
      setFile(null);
      return;
    }

    if (!ALLOWED_TYPES.includes(f.type)) {
      setError('Unsupported file type. Use PDF, PPTX, DOCX or TXT.');
      setFile(null);
      return;
    }

    setFile(f);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!title.trim()) {
      setError('Please enter a title.');
      return;
    }
    if (!file) {
      setError('Please choose a file to upload.');
      return;
    }

    try {
      setUploading(true);
      // Simulate upload delay. In a real app, you'd POST to an API route or cloud storage.
      await new Promise((res) => setTimeout(res, 900));
      // After upload, navigate to notes list or the newly uploaded note page
      router.push('/notes');
    } catch (err) {
      setError('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>Upload Notes</h1>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="title">Title</label>
          <input
            id="title"
            className={styles.input}
            type="text"
            placeholder="Enter a descriptive title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <label className={styles.label} htmlFor="file">File</label>
          <input
            id="file"
            className={styles.input}
            type="file"
            onChange={handleFileChange}
            aria-describedby="fileHelp"
            required
          />

          <div id="fileHelp" className={styles.hint}>
            Allowed: PDF, PPTX, DOCX, TXT — max 10MB
          </div>

          {file && (
            <div className={styles.preview}>
              <strong>Picked file:</strong> {file.name} • {(file.size / 1024 / 1024).toFixed(2)} MB
            </div>
          )}

          {error && <div className={styles.error}>{error}</div>}

          <div className={styles.actions}>
            <Button onClick={() => router.push('/notes')} className={styles.cancel}>Cancel</Button>
            <Button onClick={handleSubmit} className={styles.primary} disabled={uploading}>
              {uploading ? 'Uploading...' : 'Upload'}
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
