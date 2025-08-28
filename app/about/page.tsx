"use client";
import { title } from "@/components/primitives";
import { Accordion, AccordionItem } from "@heroui/react";

export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>About</h1>
      <Accordion isCompact>
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="星空下微風輕拂黃光閃耀的世界"
        >
          {"個人網站"}
          <br />
          {"2025年上線"}
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title="鋒兄塗哥公關股份有限公司"
        >
          {"企業網站"}
          <br />
          {"預計2035年上線"}
          <br />
          {"資本額100萬"}
          <br />
          {"市值目標(海角)七億"}
          <br />
          {"業務職掌"}
          <br />
          {"公關臺北市長候選人鋒兄"}
          <br />
          {"公關臺北市議員候選人"}
          <br />
          {"公關繼任董事長塗哥"}
          <br />
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title="鋒兄塗哥資訊股份有限公司"
        >
          {"企業網站"}
          <br />
          {"預計2035年上線"}
          <br />
          {"資本額100萬"}
          <br />
          {"市值目標(海角)七億"}
          <br />
          {"業務職掌"}
          <br />
          {"政府資訊標案(台北市政府除外)"}
          <br />
          {"每年拿微軟錢，宣傳我愛微軟，微軟好棒棒"}
          <br />
          {"鋒兄業餘愛好"}
          <br />
        </AccordionItem>
      </Accordion>
    </div>
  );
}
