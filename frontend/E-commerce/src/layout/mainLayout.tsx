import Header from "../components/Header";
import type { IMainLayout } from "../interfaces";

export default function MainLayout({ children }: IMainLayout) {
    return(
        <>
            <Header/>
            <main>
                {children}
            </main>
        </>
    )
}