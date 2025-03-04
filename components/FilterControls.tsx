import { AllMatchStatus } from "@/lib/types";

interface FilterControlsProps {
  setFilter: (filter: AllMatchStatus) => void;
  activeFilter: AllMatchStatus;
}

export default function FilterControls({
  setFilter,
  activeFilter,
}: FilterControlsProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value as AllMatchStatus);
  };

  return (
    <div className="sm:flex justify-center">
      <select
        value={activeFilter}
        onChange={handleChange}
        className="bg-[#0B0E12] w-full sm:w-[170px] h-[56px] min-h-[56px] max-h-[56px] top-[42px] left-[323px] gap-[12px] rounded-[4px] pt-[10px] pr-[20px] pb-[10px] pl-[16px] hover:cursor-pointer"
      >
        <option value={"all" as AllMatchStatus}>Все статусы</option>
        <option value={"Ongoing" as AllMatchStatus}>Live</option>
        <option value={"Finished" as AllMatchStatus}>Finished</option>
        <option value={"Scheduled" as AllMatchStatus}>Scheduled</option>
      </select>
    </div>
  );
}
