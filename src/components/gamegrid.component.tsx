import React, {useEffect, useState} from 'react'
import apiCilent from '../services/api-cilent';

interface Game {
    id: number;
    slug: string;
    name: string;
    released: string;
    tba: boolean;
    background_image: string;
    rating: number;
    rating_top: number;
    ratings: {};
    ratings_count: number;
    reviews_text_count: string;
    added: number;
    added_by_status: {};
    metacritic: number;
    playtime: number;
    suggestions_count: number;
    updated: string;
    esrb_rating?: {
        id: number;
        slug: "everyone" | "everyone-10-plus" | "teen" | "mature" | "adults-only" | "rating-pending";
        name: "Everyone" | "Everyone 10+" | "Teen" | "Mature" | "Adults Only" | "Rating Pending";
    },
    platforms: [
        {
            platform: {
                id: number;
                slug: string;
                name: string;
            },
            released_at?: string;
            requirements?: {
                minimum: string;
                recommended: string;
            }
        }
    ]
}

interface GetGamesResponse {
    "count": number;
    "next": string;
    "previous": string;
    "results": Game[]
}

function GameGrid() {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();

        apiCilent.get<GetGamesResponse>('/games', {signal: controller.signal})
            .then(res => setGames(res.data.results))
            .catch(error => setError(error.message));

        return () => controller.abort();
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setError('');
        }, 3000);
    }, [error]);


    return (
        <>
            {error.length > 0 && <p>{error}</p>}
            <ul>
                {
                    games.map(game => <li key={game.id}>{game.name}</li>)
                }
            </ul>
        </>
    )
}

export default GameGrid