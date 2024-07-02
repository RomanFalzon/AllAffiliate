import db from '@/data/db.json';

export default defineEventHandler((event) => {
    return {
        data: db,
    };
});
