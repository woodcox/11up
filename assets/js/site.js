import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.start()

import { partytownSnippet } from '@builder.io/partytown/integration';

const snippetText = partytownSnippet();
