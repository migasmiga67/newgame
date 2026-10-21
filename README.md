# newgame — Christmas Gala

Responsywny prototyp aplikacji eventowej w React + Vite.

## Uruchomienie

Node.js 20.19+ lub 22.12+.

```sh
npm ci --cache /workspace/.npm-cache
npm run dev -- --port 5173
```

Produkcja: `npm run build`; podgląd: `npm run preview`.

## Funkcje demonstracyjne

Panel organizatora, lista i dodawanie gości, wyszukiwanie, eksport CSV, bilet QR do pobrania, check-in przez identyfikator, wybór diety i zapis alergii, podsumowanie cateringu, przypisania stolików przez przeciąganie lub listę wyboru, harmonogram, głosowanie i podgląd uczestnika.

Dane przykładowe zapisują się w localStorage przeglądarki. Przełącznik roli jest podglądem, nie zabezpieczeniem. Brak backendu, prawdziwych kont, autoryzacji, skanowania kamerą, wysyłki zaproszeń i synchronizacji na żywo. Nie używać do obsługi rzeczywistych danych osobowych przed dodaniem uwierzytelniania i zabezpieczeń po stronie serwera.

## Publikacja na GitHub Pages

Workflow `.github/workflows/pages.yml` buduje aplikację z katalogu głównego i publikuje `dist` po zmianach na `main`. W Settings → Pages ustaw Source na GitHub Actions. Ścieżka zasobów Vite: `/newgame/`.

Źródła aplikacji znajdują się w `app/`. `npm run build` tworzy `dist/` i kopiuje gotowy `index.html` oraz `assets/` do katalogu głównego repozytorium. Dzięki temu działa także istniejąca konfiguracja Pages: Deploy from a branch → main → / (root). Publikuj pliki wygenerowane razem ze zmianami źródeł. Nie edytuj wygenerowanego głównego `index.html` ręcznie; edytuj `app/index.html`.

Wcześniejszy projekt w `frontend/chatgotuje` został zachowany; workflow publikuje Christmas Gala z katalogu głównego.
