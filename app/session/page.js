export const metadata = {
  title: 'Session Generator — Dark Anon Tech',
  description: 'Generate your WhatsApp session ID to connect DARK ANON TECH XD ULTRA.',
}

export default function SessionPage() {
  return (
    <iframe
      src="https://dark-anon-xd-session-generator-woyo.onrender.com/pair"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: 'none',
        display: 'block',
      }}
      title="Session Generator"
      allow="clipboard-write"
    />
  )
}
