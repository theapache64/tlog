![](cover.jpeg)
#  📖 tlog
> tech blog of the day

**tlog**, derived from "tech blog", is a simple website that redirects you to a different tech blog every day. 
This is a project that I created to encourage myself to read a tech blog daily  🫠

## 💡 Usage
Just visit https://theapache64.github.io/tlog 

## 📆 Schedule
You can see the full schedule here ➡️ https://docs.google.com/spreadsheets/d/1pvwjyRWvRPzHoacraKi4w6324-BErl3Bs-Q9HIwbeGI/edit?usp=sharing

## ⌨️ ProTip
**⏰ 10AM crontab**

```bash
(crontab -l 2>/dev/null; echo "0 10 * * * open \"https://theapache64.github.io/tlog\"") | crontab -
```
Execute the above command in your terminal to automatically open `tlog` every day at 10 AM ;)

**⚡ Raycast user**

If you're a Raycast user, add a "quick link" to `tlog` so that you can quickly read the blog of the day whenever you're bored ;)
![image](https://github.com/user-attachments/assets/8205a426-7b66-4b20-9321-6b8664761452)

## FAQ

**Q: Why does the link expire in a day? Why can't you provide a permalink?**

I tested permalinks for a week. The bookmark count increased while actual visits decreased. It felt like people were saving it for later and not reading it, just like the numerous articles in your bookmarks ;) - a classic ‘bookmark black hole.’ Setting a 1-day expiry seemed to nudge good engagement, keeping it lively.

## Future Scope
- [ ] Shorten the domain
- [ ] Vote on the tlog
