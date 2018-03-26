import i18next from 'i18next'
import locizeBackend from 'i18next-locize-backend'
import locizeEditor from 'locize-editor'
import languageDetector from 'i18next-browser-languagedetector'
import { reactI18nextModule } from 'react-i18next'

i18next
    .use(locizeBackend)
    .use(locizeEditor)
    .use(languageDetector)
    .use(reactI18nextModule)
    .init({
        fallbackLng: 'en',
        ns: ['translations'],
        defaultNS: 'translations',
        debug: true,
        backend: {
            projectId: '51a86cf0-0f10-4b90-bd4e-7e294622ce8a',
            apiKey: '2f8cfe7b-8f70-416c-9353-583fa78010e0',
            referenceLng: 'en-US'
        },
        react: {
            wait: true
        }
    })

export default i18next