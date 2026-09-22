# Domain in Vite allowedHosts aufnehmen

## Ziel
Die Domain `denaro-consult.solutions` soll beim Dev-Server als erlaubter Host freigegeben werden, damit Zugriffe über diese Domain nicht mit dem Vite-Fehler „Blocked request. This host is not allowed." abgewiesen werden.

## Umsetzung (nur `vite.config.ts`)
Die bestehende `defineConfig`-Struktur bleibt unverändert; es wird nur der `vite`-Block ergänzt:

```ts
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    server: {
      allowedHosts: ["denaro-consult.solutions", "www.denaro-consult.solutions"],
    },
  },
});
```

- `denaro-consult.solutions` — wie angefragt
- `www.denaro-consult.solutions` — gleiche Domain mit www-Präfix, damit beide Varianten funktionieren

## Verifikation
- Build ausführen, um zu bestätigen, dass die Konfiguration sauber geladen wird.
- Aufruf des Dev-Servers mit `Host: denaro-consult.solutions` prüfen — keine Block-Meldung mehr.
