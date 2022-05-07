export interface Subscribe<T> {
    subscribe(callback: (value: T) => void): void;
}
export interface Send<T> {
    send(value: T): void;
}
export interface Plugin<Elm> {
    install(app: Elm): void;
}
export declare type PluginInit<Opts, Elm> = (options: Opts) => Plugin<Elm>;
declare type PortOptions<Elm> = {
    ports: Plugin<Elm>[];
};
interface Installer {
    install<Elm>(app: Elm, options: PortOptions<Elm>): Elm;
}
declare const elmPlug: Installer;
export { elmPlug };
export default elmPlug;
