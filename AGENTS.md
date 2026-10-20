<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- All editable site copy, contacts, projects and skills live in `src/content/site.ts`; components only read from it, so the owner can update content in one place.
- The portfolio is a single landing page (`src/routes/index.tsx`) with in-page anchor sections, as the brief requested; no backend — the contact form hands off to WhatsApp via `src/lib/whatsapp.ts` instead of simulating a send.
- Contacts set to `null` in the content file are hidden everywhere; never invent links.
