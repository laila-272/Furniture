import { FOOTER_COLUMNS } from "../Data/Products.js";

export default function Footer() {
  return (
    <footer className="bg-[#fff] px-6 lg:px-[85px] pt-8 pb-6">
      <div className="grid grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-8 min-h-[240px]">
        <div>
          <div className="inter font-extrabold text-[14px]">LOGO</div>
          <p className="text-[9px] text-[#888] leading-[14px] mt-6 max-w-[120px]">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>
        {FOOTER_COLUMNS.map(({ heading, items }) => (
          <div key={heading}>
            <h4 className="text-[9px] font-medium">{heading}</h4>
            <ul className="mt-6 space-y-6 text-[9px] text-[#888]">
              {items.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <hr className="border-[#ddd] mt-6" />
      <p className="text-[9px] mt-4">2023 furino. All rights reserved</p>
    </footer>
  );
}
