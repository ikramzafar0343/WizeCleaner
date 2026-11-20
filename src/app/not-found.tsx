import Link from "next/link";
import { Squeegee } from "@/shared/ui/Squeegee";
import { WhatsAppCta } from "@/shared/ui/WhatsAppCta";

export default function NotFound() {
  return (
    <section className="frame mt-3 flex min-h-[80vh] flex-col items-center justify-center bg-gradient-to-b from-sky-2 to-mist px-6 py-32 text-center md:mt-4">
      <Squeegee className="h-24 w-auto animate-float" />
      <h1 className="mt-8 text-5xl text-forest md:text-7xl">This page got wiped</h1>
      <p className="mt-5 max-w-md text-muted">The link may be old or mistyped. Head back home or message us directly.</p>
      <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
        <WhatsAppCta />
        <Link href="/" className="inline-flex min-h-12 items-center rounded-full bg-white px-6 font-semibold text-forest">
          Back to home
        </Link>
      </div>
    </section>
  );
}
