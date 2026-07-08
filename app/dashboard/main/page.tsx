import { SimpleWidget, WidgetsGrid } from "@/app/components";


export const metadata = {
    title: 'Admin Dashboard',
    description: 'This is the main page of the Dashboard',
};

export default function MainPage() {
    return (
        <div className="text-black text-center">
            <h1 className="mt-2 text-3xl text-center">Dashboard</h1>
            <span className="text-xl">General Info</span>

            <WidgetsGrid />
        </div>
    );
}