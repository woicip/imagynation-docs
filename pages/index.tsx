import Head from 'next/head';
import Navigation from '../components/Navigation/Index';
import Footer from '../components/Footer/Index';
import Anime from '../components/Anime/Index';
import User from '../components/User/Index';
import Posts from '../components/Posts/Index';
import Blog from '../components/Blog/Index';
import { useReducer } from 'react';

interface NavState {
    user: boolean,
    anime: boolean,
    posts: boolean,
    blog: boolean,
}

const navState: NavState = {
    user: true,
    anime: false,
    posts: false,
    blog: false
}

type Actions = 'anime' | 'user' | "posts" | "blog";

function NavReducer(state: NavState, action: { type: Actions }): any {
    switch(action.type){
        case 'anime':
            return { beach: false, anime: true, user: false, posts: false, blog: false };

        case 'user': 
            return { beach: false, anime: false, user: true, posts: false, blog: false };

        case 'posts':
            return { beach: false, anime: false, user: false, posts: true, blog: false };

        case 'blog': 
            return { beach: false, anime: false, user: false, posts: false, blog: true };

        default:
            throw new Error();
    }
}

export default function Home() {

    const [ state, dispatch ] = useReducer(NavReducer, navState);

    return (
        <section className="flex flex-col items-center justify-center animate-fadeIn">
            <Head>
                <title>🦄 Imagynation</title>
                <meta name="description" content="IMAGYNATION API DOCUMENTATION" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="w-[50%] py-[110px] text-white laptopXL:w-[80%] tabletL:w-[90%]">
                <section className='flex flex-col items-center justify-center '>
                    <h1 className='text-6xl tabletM:text-5xl font-bold text-center'>🦄 Imagynation.</h1>
                    <p className='mt-[30px] text-center text-lg text-white'>
                        Accelerate UI prototyping, offering developers the essential dummy data they crave.
                    </p>
                    {/* <div className='mt-[20px] text-sm py-[5px] px-[15px] bg-docs-cyan/40 border border-white/20 rounded-full'>
                        <p className='text-white font-semibold'>v1.0.0</p>
                    </div> */}
                </section>

                <Navigation state={state} dispatch={dispatch} />
                
                { state.anime && <Anime /> }
                { state.user && <User /> }
                { state.posts && <Posts /> }
                
                <div className='mt-[100px] w-full h-[1px] bg-white/10'></div>
                <Footer />
            </main>

        </section>
    )
}
