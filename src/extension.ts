import { LanguageClient, LanguageClientOptions, ServerOptions } from "vscode-languageclient/node";

let client: LanguageClient;

export function activate(): void {
    const serverOptions: ServerOptions = { command: "flatpak-spawn", args: ["--host", "blueprint-compiler", "lsp"] };
    const clientOptions: LanguageClientOptions = {
        documentSelector: [{ scheme: "file", language: "blueprint-gtk" }],
    };
    client = new LanguageClient("blueprint-gtk", serverOptions, clientOptions);
    client.start();
}

export function deactivate(): Thenable<void> | void {
    return client?.stop();
}
