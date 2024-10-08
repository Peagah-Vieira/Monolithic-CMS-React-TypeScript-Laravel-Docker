import { Link, usePage } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faCube, faUsers, faTags, faCopy, faComments, faRocket } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
    const appName = import.meta.env.VITE_APP_NAME;
    const { url } = usePage()
    const activeLink = "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all font-semibold text-primary"
    const normalLink = "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary";

    return (
        <div className="hidden border-r bg-muted/40 md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <Link href={route('dashboard')} className="flex items-center gap-2 font-semibold">
                        <FontAwesomeIcon icon={faRocket as IconProp} size="xl" />
                        <span className="">{appName}</span>
                    </Link>
                </div>
                <div className="flex-1">
                    <nav className="grid items-start px-2 text-base font-medium lg:px-4">
                        <Link href={route('dashboard')} className={url === '/dashboard' ? activeLink : normalLink}>
                            <FontAwesomeIcon icon={faHouse as IconProp} />
                            Home
                        </Link>
                        <Link href={route('dashboard.users')} className={url === '/dashboard/users' ? activeLink : normalLink}>
                            <FontAwesomeIcon icon={faUsers as IconProp} />
                            Users
                        </Link>
                        <Link href={route('dashboard.categories')} className={url === '/dashboard/categories' ? activeLink : normalLink}>
                            <FontAwesomeIcon icon={faCube as IconProp} />
                            Categories
                        </Link>
                        <Link href={route('dashboard.contents')} className={url === '/dashboard/contents' ? activeLink : normalLink}>
                            <FontAwesomeIcon icon={faCopy as IconProp} />
                            Contents
                        </Link>
                        <Link href={route('dashboard.tags')} className={url === '/dashboard/tags' ? activeLink : normalLink}>
                            <FontAwesomeIcon icon={faTags as IconProp} />
                            Tags
                        </Link>
                        <Link href={route('dashboard.comments')} className={url === '/dashboard/comments' ? activeLink : normalLink}>
                            <FontAwesomeIcon icon={faComments as IconProp} />
                            Comments
                        </Link>
                    </nav>
                </div>
            </div>
        </div>)
}
