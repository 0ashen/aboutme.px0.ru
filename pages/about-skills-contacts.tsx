import {Head} from '../components/Head'
import {GeneralLayout} from '../components/GeneralLayout/GeneralLayout'
import {TFunction} from 'next-i18next'
import {withTranslation} from '../i18-next'
import {PageAboutMeNamespaceEnum} from '../components/pages/About/about-translate-name-space.enum'
import {AboutP} from '../components/pages/About/AboutP'

function AboutSkillsContacts({t}: { readonly t: TFunction }): JSX.Element {
    return (
        <>
            <Head>
                <title>
                    {t(
                        `${PageAboutMeNamespaceEnum['common']}:common-browser-tab-title-prefix`
                    ) + t('browser-tab-title')}
                </title>
            </Head>
            <GeneralLayout>
                <AboutP/>
            </GeneralLayout>
        </>
    )
}


AboutSkillsContacts.getInitialProps = async () => ({
    namespacesRequired: [
        PageAboutMeNamespaceEnum['page-about-skills-contacts'],
        PageAboutMeNamespaceEnum['common'],
    ],
})

export default withTranslation([
    PageAboutMeNamespaceEnum['page-about-skills-contacts'],
    PageAboutMeNamespaceEnum['common'],
])(AboutSkillsContacts)
