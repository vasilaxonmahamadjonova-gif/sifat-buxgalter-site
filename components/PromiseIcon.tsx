/** Majburiyatlar uchun monoline ikonkalar: 24px, 1.5px chiziq, bir xil burchak radiusi. */
const paths = [
  "M4 5h16v11H9l-5 4z", // suhbat: tez javob
  "M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6zM9 12l2 2 4-4", // qalqon: xato bizdan chiqsa
  "M5 19L19 5M7.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM16.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z", // foiz
  "M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16M15 9h4a1 1 0 0 1 1 1v11M3 21h18M8 8h3M8 12h3M8 16h3", // ofis
  "M6 11h12v10H6zM9 11V7a3 3 0 0 1 6 0v4", // qulf: NDA
  "M4 5h16v11H4zM2 19h20M10 19v-3M14 19v-3", // kompyuter
  "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM20 20l-4-4", // lupa: tekshiruv
];

export default function PromiseIcon({ i }: { i: number }) {
  return (
    <span className="glass-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d={paths[i % paths.length]} />
      </svg>
    </span>
  );
}
