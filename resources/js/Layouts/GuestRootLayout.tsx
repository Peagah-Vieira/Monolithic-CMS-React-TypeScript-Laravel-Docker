import { PropsWithChildren } from 'react';

export default function GuestRootLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-50 dark:bg-gray-900">
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
