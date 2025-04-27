---
layout: post
title: The many types of turnovers
tags: [pbp, video]
photoloc: /assets/posts/turnovers/
toc: true
has_date: true
---

How many ways are there to turn the ball over in a basketball game?

NBA play-by-play data tags each and every game action with two fields:

`EVENTMSGTYPE`: Play type (e.g. made shot, free throw, rebound)
`EVENTMSGACTIONTYPE`: Play sub-category (e.g. 3PT shot; def. rebound)

Each play type in `EVENTMSGTYPE` is given a code, for example, the number for turnovers is `7`. Within this play type, there are at least 28 play subcategories, each with their own `EVENTMSGACTIONTYPE` code, meaning the NBA tracks almost 30[^1] different types of turnovers. 

There's no rhyme or reason[^2] to where the actual code for each sub-category comes from: lower isn't more common, it's not ordered alphabetically, and there are large gaps between the codes. Unless otherwise mentioned from here on in, the `#XX` code listed with each turnover type is that play subcategory's `EVENTMSGACTIONTYPE`. 

Anyway, let's explore!

## Standard Turnovers
We'll go through 12 different types of weird and wacky turnovers below; this section is just for the standard stuff. About half of the categories then are just different ways to capture what I'd consider standard-fare turnovers: travelling (#4); throwing the ball out of bounds (#45); stepping out of bounds (#39); going out of bounds some other way (#40); backcourt, lane, and kicked ball violations (#13, #17 and #19); having the ball stolen (#1 and #2); goaltending (#15); committing an offensive foul (#36 and #37) (including illegal screens but not including [off-ball fouls](#0--turnover-turnover)); double dribbling, two ways (#6 and #7); and palming the ball (#21).

We don't need to go into any more detail on these, except to say that palming is just another name for carrying.


## Time Violations
On offense, you can time out in five ways: 
- after 3 seconds, parking yourself in the key too long (#8);
- after 5 seconds, without inbounding the ball (#9);
- after 8 seconds, failing to cross halfway in time (#10);
- after 10 seconds, too slow to take a free throw (#24); or
- after 24 seconds, when the shot clock runs out (#11).

The 10 second violation had its popular moment a couple of years ago when people noticed the length of Giannis' free throw routine, and opposing crowds started counting out the ten seconds every time he ended up at the line. Only one was recorded this year — incorrectly[^3] — attributed to Duncan Robinson where he actually just stepped out of bounds (#39).

The other ones are fairly self-explanatory, with most to least common in descending order of length (i.e. 24 seconds the commonest, 3 seconds the least). 

I'm not going to quote the NBA rulebook sections here, because there's an entry for each of these violations, but I am going to start for some of the more obscure ones below.

## #0 — Turnover Turnover
Cryptic name, basic situation (unfortunately): an off-ball offensive foul that isn't an illegal screen is sometimes logged as a "turnover turnover". File this one under [Standard Turnovers](#standard-turnovers) above.

The only one recorded this year was by Isaac Jones on the Kings, for [taking out Wembanyama](https://videos.nba.com/nba/pbp/media/2024/12/01/0022400313/537/aa222d26-cd7b-7d6c-8204-9e9ee53a2d5c_1280x720.mp4) on the way to a loose ball. 

## #12 — Inbound Turnover
Beyond the more typical 5-second violation, the NBA rulebook section on inbounding violations (quoted below) has a few wrinkles that are more interesting. These are collected under a category called "inbound turnover". 

If you inbound the ball straight into the hoop, it's a turnover. Bad luck, no points. Same if you throw it out of bounds without it touching anyone else. Unlike a normal out of bounds, the other team gets the ball at the spot of the inbound, not where it went out. You can't hand it off, and you can't carry in on yourself. And definitely, absolutely make sure that at least one foot is behind the line before you throw the ball.

> [*RULE NO.10: VIOLATIONS AND PENALTIES*](https://official.nba.com/rule-no-10-violations-and-penalties/#:~:text=Section%20III%E2%80%94Thrower%2Din)
> 
> **Section III (Thrower-in)**
> 
> A thrower-in shall not (1) carry the ball onto the court; (2) fail to release the ball within 5 seconds; (3) touch it on the court before it has touched another player; (4) leave the designated throw-in spot which is one step to his left or right; (5) throw the ball so that it enters the basket before touching anyone on the court; (6) step on the court over the boundary line before the ball is released; (7) throw the ball out-of-bounds without it being touched by a player in the game; (8) exit the playing surface to gain an advantage on a throw-in; (9) hand the ball to a player on the court.
> 
> **PENALTY**: Loss of ball. The ball is awarded to the opposing team at the original spot of the throw-in.

Here's a short compilation of a few of these plays this year. This year, John Collins and Josh Giddey led the league in these types of turnovers with two; nobody else had more than one. 

<iframe src="https://www.youtube.com/embed/VZDbW8Oj1E0?si=zHr5gZjcojXhmUZN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## #18 — Jump Ball Violation
Again self-explanatory. If you win the jump ball but tap it to yourself, it's a violation, it counts as a turnover. 
Only one was recorded this year by Cam Johnson.

> [*RULE NO.6: Putting Ball in Play – Live / Dead Ball*](https://official.nba.com/rule-no-6-putting-ball-in-play-live-dead-ball/)
> 
> **Section VII (Restrictions Governing Jump Balls)**
>
> (e) Neither jumper may catch the tossed or tapped ball until it touches one of the eight non-jumpers, the floor, the basket or the backboard.
>
> (f) Neither jumper is permitted to tap the ball more than twice on any jump
> 
> **Penalty**: Ball awarded out-of-bounds to the opponent.

## #20 — Illegal Assist
An "illegal assist in scoring" occurs when a player is hanging from the rim, e.g. after a missed dunk, and tries to play at the ball with one hand while still holding on to the hoop with the other. Every time this happens, the player can't help themselves but reach out for the ball, instead of dropping off the rim like they know they should. 

> [*RULE NO.10: VIOLATIONS AND PENALTIES*](https://official.nba.com/rule-no-10-violations-and-penalties/#:~:text=Section%20XII%E2%80%94Illegal,throw%20line%20extended.)
> 
> **Section XII (Illegal Assist in Scoring)**
> 
> (a) A player may not assist himself in an attempt to score by using any part of the rim, net, backboard or basket support to lift, hold or raise himself.
> 
> (b) A player may not assist a teammate to gain height while attempting to score.
>
> **PENALTY**: Loss of ball. The ball is awarded to the opposing team on the sideline at the free throw line extended.

I think part (b) of this rule is most interesting—you can't lift your teammate up to help them score. Imagine the play that caused this rule to be written. One man lifting another, like a father lifting his son, for his first dunk. And I wonder how long this rule has been around for...

Anyway, it's happened 10 times this season, with a little compilation video below.

<iframe src="https://www.youtube.com/embed/TZZUNBZQ-5I?si=Xfa8hzpKDrAwZkgq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## #33 — Punched Ball

Like a kicked ball, but with the hands. Open palm taps only in basketball. Three instances this season, by Curry, Caldwell-Pope, and Zubac. 

> [*RULE NO.10: VIOLATIONS AND PENALTIES*](https://official.nba.com/rule-no-10-violations-and-penalties/#:~:text=Section%20IV%E2%80%94Strike%20the%20Ball)
>
> **Section IV (Strike the Ball)**
> 
> (a) A player shall not kick the ball or strike it with the fist.
> 
> **PENALTY**: If the violation is by the offense, the ball is awarded to the opposing team on the sideline nearest the spot of the violation but no nearer to the baseline than the free throw line extended.

## #35 — Basket from below
Self explanatory: if you put the ball through the basket the wrong way, that's a turnover. Again three instances this season: Vučević, Amen Thomson, and Camara. 

> [*RULE NO.10: VIOLATIONS AND PENALTIES*](https://official.nba.com/rule-no-10-violations-and-penalties/#:~:text=Section%20XI%E2%80%94Entering,throw%20line%20extended.)
> 
> **Section XI (Entering Basket From Below)**
> 
> A player shall not be the last to touch a ball which rises above the rim level within the cylinder from below.
>
> **PENALTY**: Loss of ball. The ball is awarded to the opposing team on the sideline at the free throw line extended.

What's crazy is that travelling — which feels like a much more fundamental concept — comes after both basket from below and [illegal assists](#20--illegal-assist) in the NBA Rulebook. 

## #42 — Excess Timeout
Chris Webber made this one famous in his Michigan Fab Five days — calling for a timeout when you don't have any left is a technical foul and an automatic turnover. Dyson Daniels did [the exact same thing](https://videos.nba.com/nba/pbp/media/2025/03/04/0022400884/681/ac7cba70-eff4-1c5b-5122-6da4663303a1_1280x720.mp4) against the Bucks this year — called for an extra time out when he couldn't get the ball inbounded in time. These are usually interesting because coaches generally are only calling timeouts like this in high-leverage, end-of-game situations. It's also worth noting that you still get to have the timeout you called for, you just don't get to keep the ball afterwards.

> [*RULE NO.12: FOULS AND PENALTIES*](https://official.nba.com/rule-no-12-fouls-and-penalties/#foultypes:~:text=Requests%20for%20a,play%20was%20interrupted.)
>
> *A: TECHNICAL FOUL*
>
> **Section I (Excessive Timeouts)**
>
> (a) Requests for a timeout in excess of the authorized number shall be granted and a technical foul shall be assessed. Following the timeout and free throw attempt, the ball will be awarded to the team which shot the free throw and play shall resume with a throw-in nearest the spot where play was interrupted.

The Heat actually lost an NBA Cup game against the Pistons this year like this. All tied at 120—120 with 1.1 seconds to go in overtime, the Heat had the ball and called for a timeout they didn't have. Malik Beasley made the technical free throw for the Pistons, and the game ended 120-123 after a couple of take foul free throws.

## #44 — Too Many Players
Exactly as described, if you try to start play with six or more guys on the court, it's a violation and the other team gets the ball. And you have to send one guy back to the bench.

Only recorded once this last season, early on by the Pistons. As far as I can tell, Ron Holland II (labelled with "6" in the frame below) shouldn't have been on the floor, and in [the video](https://videos.nba.com/nba/pbp/media/2024/10/23/0022400063/586/18215acd-8b64-9470-49f8-ade948de2fc9_960x540.mp4) you can see him sort of try to sneak back to the bench when the call is made. 

{% include picture.html
  file="pistons.png"
  caption="The Pistons trying to sneak a sixth man on the floor. Look at Malik Beasley, bottom left."
  class="wide"
%}

## Wrap up
In the end, the league tracks up to 30 separate turnover codes, but most plays fall into a familiar handful. Travels, steals, throw‑aways, and basic violations make up the bulk; the stranger entries (which are also the most interesting) show up only a few times all season. The next time you see “turnover” in a box score, remember there’s probably a story — and a specific `EVENTMSGACTIONTYPE` — behind it.


[^1]: I'm assuming there are a couple more really irregular sub-categories that weren't logged this season, like a five-second back to the basket violation.
[^2]: None that've been publicly confirmed, anyway.
[^3]: [Video is here.](https://videos.nba.com/nba/pbp/media/2025/01/02/0022400463/350/f90e30b2-2b62-298a-0f2a-78cd507f0a3d_960x540.mp4)