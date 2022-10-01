import { ReactNode } from "react";
export const Tooltip = ({
    message, children
}: {
    message: string, children: ReactNode
}) => {
    return (
        <div className="relative flex flex-col items-center group">
            {children}
            <div className="absolute -bottom-7 flex flex-col items-center mb-6 group-hover:opacity-50 opacity-0 transition">
                <span className="absolute w-32 h-12 z-10 p-2 text-xs text-white whitespace-no-wrap bg-gray-900 shadow-lg rounded-md">{message}</span>
                <div className="w-3 h-3 -mt-2 rotate-45 bg-gray-900"></div>
            </div>
        </div>
    );
}