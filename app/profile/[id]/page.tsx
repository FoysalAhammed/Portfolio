import { getUserProjects } from '@/lib/actions'
import ProfilePage from '@/components/ProfilePage'
import { UserProfile } from '@/common.types';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type Props = {
    params: {
        id: string,
    },
}

const UserProfile = async ({ params }: Props) => {
    const result = await getUserProjects(params.id, 100) as { user: UserProfile }

    if (!result?.user) return (
        <p className="no-result-text">Failed to fetch user info</p>
    )

    return (
        <section className="bg-[url('/bg_main.svg')] bg-cover bg-center">
            <Navbar/>
            <ProfilePage user={result?.user}  />
            <Footer/>
        </section>
    )
}

export default UserProfile
