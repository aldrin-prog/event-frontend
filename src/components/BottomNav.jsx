import { CalendarCog, HomeIcon, User } from "lucide-react";

const BottomNav=()=>{
    return (<div className="btm-nav md:hidden">
        <a href="/">
          <HomeIcon/>
        </a>
        <a href="/profile">
          <User/>
        </a>
        <a href="/events">
        <CalendarCog />
        </a>
      </div>)
}
export default BottomNav;