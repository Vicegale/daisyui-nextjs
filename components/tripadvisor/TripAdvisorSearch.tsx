import { ReactNode, useEffect, useRef, useState } from 'react';

async function typeAhead(s: string, signal: AbortSignal): Promise<string[]> {
    return fetch('/api/ta_search/' + s, { signal: signal }).then(async (res) => {
        const locations = await res.json();
        return locations.data.filter((c) =>
            c.name.toLowerCase().includes(s.toLowerCase())
        );
    });
}

const TripAdvisorSearch = () => {
    const [input, setInput] = useState('');
    const [locations, setLocations] = useState([]);
    const abortController = useRef(new AbortController());

    useEffect(() => {
        if (input.length >= 3) {
            abortController.current.abort();
            abortController.current = new AbortController();
            typeAhead(input, abortController.current.signal).then((c: string[]) => {
                setLocations(c);
            }).catch((err) => {
            });
        } else {
            setLocations([]);
        }
    }, [input]);

    return (
        <div className="w-96 m-4 p-2 border-solid border-2 border-primary rounded-md">
            <input
                type="text"
                placeholder="Search"
                onChange={(e) => setInput(e.target.value)}
            />
            <div>
                {locations.map((x) => (
                    <div className="border-solid border-2 rounded-md hover:bg-secondary active:bg-accent">
                        <div className='flex flex-col'>
                            <div className='flex flex-row justify-between'>
                                <p className='font-bold ml-4'>{x.name}</p>
                                <p className='text-slate-400 text-xs'>{x.location_id}</p>
                            </div>
                            <p className='ml-4'>{x.address_obj.city}, {x.address_obj.country}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TripAdvisorSearch;
