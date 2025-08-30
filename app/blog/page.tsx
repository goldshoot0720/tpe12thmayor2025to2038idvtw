"use client";
import { title } from "@/components/primitives";
import { Image } from "@heroui/react";
import NextImage from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div>
      <h1 className={title()}>Blog</h1>
      <div>
        <Link href="https://jekyll.tpe12thmayor2025to2038.idv.tw/">
          <Image
            alt="Hugo Image"
            as={NextImage}
            height={200}
            src="/images/Screenshot2025-08-30at18-27-36.png"
            width={300}
          />
          Jekyll
        </Link>
      </div>
      <div>
        <Link href="https://hexo.tpe12thmayor2025to2038.idv.tw/">
          <Image
            alt="Hugo Image"
            as={NextImage}
            height={200}
            src="/images/Screenshot2025-08-30at18-29-02.png"
            width={300}
          />
          Hexo
        </Link>
      </div>
      <div>
        <Link href="https://hugo.tpe12thmayor2025to2038.idv.tw/">
          <Image
            alt="Hugo Image"
            as={NextImage}
            height={200}
            src="/images/Screenshot2025-08-30at18-29-50.png"
            width={300}
          />
          Hugo
        </Link>
      </div>
      <div>
        <Link href="https://wordpress.tpe12thmayor2025to2038.com">
          <Image
            alt="WordPress Image"
            as={NextImage}
            height={200}
            src="/images/Screenshot2025-08-30at18-32-11.png"
            width={300}
          />
          WordPress
        </Link>
      </div>
      <div>
        <Link href="https://drupal.tpe12thmayor2025to2038.com">
          <Image
            alt="Drupal Image"
            as={NextImage}
            height={200}
            src="/images/Screenshot2025-08-30at18-36-42.png"
            width={300}
          />
          Drupal
        </Link>
      </div>
      <div>
        <Link href="https://ghost.tpe12thmayor2025to2038.com">
          <Image
            alt="Ghost Image"
            as={NextImage}
            height={200}
            src="/images/Screenshot2025-08-30at18-41-33.png"
            width={300}
          />
          Ghost
        </Link>
      </div>
    </div>
  );
}
