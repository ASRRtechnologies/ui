import Image, {StaticImageData} from "next/image";
import {Center, Overlay} from "@mantine/core";
import Link from "next/link";

export type CoreLogoProps = {
    src: string | StaticImageData
    width: number
}

export const CoreLogo = ({width, src}: CoreLogoProps) => {
    return (
        <Center sx={{width: width, position: "relative"}}>
            <Image src={src} width={width} alt="Company logo"/>
            <Overlay<typeof Link> opacity={0} component={Link} href="/"/>
        </Center>
    );
};

