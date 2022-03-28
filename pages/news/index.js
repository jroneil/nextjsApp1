import{useRouter} from 'next/router';
import { Fragment } from 'react/cjs/react.production.min';
import Link from 'next/link';
function NewsPage() {


    const router = useRouter();
    const newsid = router.query.newsId;
    return (
        <Fragment>
            <h1>The News Page</h1>
            <ul>
                <li><Link href="/news/GreatCars">great Cars</Link></li>
                <li><Link href="/news/GreatBoats"> Great Boats</Link></li>
            </ul>
        </Fragment>
    )
}
export default NewsPage;