import{useRouter} from 'next/router';
import { Fragment } from 'react/cjs/react.production.min';
function DetailPage(){
    const router=useRouter();
    const newsid=router.query.newsId;
    return (
        
        <h1>The {newsid } details Page</h1>
        
    )
}
export default DetailPage;