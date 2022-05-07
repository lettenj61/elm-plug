// ELM PORTS

export interface Subscribe<T> {
  subscribe(callback: (value: T) => void): void
}

export interface Send<T> {
  send(value: T): void
}


// PLUGIN

export interface Plugin<Elm> {
  install(app: Elm): void
}

export type PluginInit<Opts, Elm> =
  (options: Opts) => Plugin<Elm>


// API

type PortOptions<Elm> = {
  ports: Plugin<Elm>[]
}

interface Installer {
  install<Elm>(app: Elm, options: PortOptions<Elm>): Elm
}

const elmPlug: Installer = {
  install<Elm>(app: Elm, options: PortOptions<Elm>): Elm {
    options.ports.forEach(plugin => {
      plugin.install(app)
    })
    return app
  }
}

export { elmPlug }
export default elmPlug