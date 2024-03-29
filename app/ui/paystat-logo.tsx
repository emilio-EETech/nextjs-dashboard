import { CubeIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function PayStatLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      <CubeIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-4xl">PayStat</p>
    </div>
  );
}
