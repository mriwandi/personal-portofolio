export default function CardLabel({label, value}: {label: string, value: string}) {
  return (
    <div className="flex flex-col w-full w-60">
      <span className="text-slate-500 text-sm">{label}</span>
      <span className="truncate">{value}</span>
    </div>
  );
}