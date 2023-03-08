import {Route} from "@/core/CoreSideBar/CoreSidebar";

export type LinksGroupProps = Route & {
    onClick?: () => void
    onClickNestedPaths?: () => void
}
