import PropFirmTable from "@/components/PropFirmTable/PropFirmTable";
export default function Home() {
  return (
    <div className="">
      <div className="bg-[var(--color-bg)] text-[var(--color-text)] p-6">
        This is a dark background with white text
      </div>

      <div className="bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] p-6 text-white">
        Gradient Background Example
      </div>

      <div>
        <PropFirmTable />
      </div>
      <p className="text-[var(--color-pink)]">This is pink text</p>
      <p className="text-[var(--color-green)]">This is green text</p>

      <button className="bg-[var(--color-purple)]  px-4 py-2 rounded-md text-white">
        Click Me
      </button>
    </div>
  );
}
