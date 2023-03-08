import Image from "next/image";

export type CoreLogoProps = {
    src: string,
}
export const CoreLogo = (props: CoreLogoProps) => {
    return <Image src={props.src} height={30} alt={"Logo"} priority/>
}