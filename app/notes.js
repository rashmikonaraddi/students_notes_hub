export default function Notes() {
  const notes = [
    { id: 1, title: 'Math Notes', subject: 'Mathematics' },
    { id: 2, title: 'Physics Lecture 3', subject: 'Physics' }
  ];

  return (
    <div>
      <h1>Available Notes</h1>
      {notes.map(note => (
        <div key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.subject}</p>
          <button>Download</button>
        </div>
      ))}
    </div>
  );
}
