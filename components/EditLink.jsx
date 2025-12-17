// components/EditLink.jsx
export default function EditLink({ filePath, className }) {
  if (!filePath) return null;
  
  const githubUrl = `https://github.com/FunTimeMC/wiki/blob/main${filePath}`;
  
  return (
    <a
      href={githubUrl}
      target="_blank"
      rel="noreferrer"
      className="ft-editlink"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
      Предложить правку
    </a>
  );
}
