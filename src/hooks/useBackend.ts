import { createContext, useContext } from "react"
import IBackendClient from "../backend/IBackendClient"

interface IBackendContext {
    client: IBackendClient | null
}

export const BackendContext = createContext<IBackendContext>({client: null})

const useBackend = () : IBackendClient => {
    const context = useContext(BackendContext);

    return context.client!;
}

export default useBackend;