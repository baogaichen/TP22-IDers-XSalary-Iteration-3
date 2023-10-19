<?php
$mbti_type = "";

$career_advice = array(
    "ISTJ"=>"<b>Your personality traits:</b> Serious, talk less, rely on energy to concentrate and follow through. Pay attention to practice, be orderly, seek truth from facts, be logical, realistic and trustworthy. 
    <br>Try to organize everything. Responsible, they decide what to do themselves and are unwilling to oppose or interfere with it, and are determined to get it done.
    <br><b>Professional career recommendations:</b> IT programmers, astronomers, database management, accountants,
    <br>real estate agents, administration, meteorologists, health care administrators, auditors, accountants, etc.
    ",
    "ISFJ" =>"<b>Your personality traits:</b> few words, friendly, responsible and serious. Work diligently to fulfill your responsibilities.
    <br>Can make any project and group more stable. Thoughtful, hardworking, and accurate.
    <br>Their interests are usually not technical. Ability to be patient with necessary details, loyal, considerate, insightful, and caring about what others think.
    <br><b>Professional career recommendations:</b> Physician, nutritionist, librarian/archivist, interior decorator, customer service specialist, bookkeeper,
    <br>special education teacher, hotel management, paralegal, personnel management, nutritionist, tutor/counselor, insurance agent, etc.
    ",
    "INFJ"=>"<b>Your personality traits:</b> Rely on perseverance to achieve success, be creative, and want to do what needs to be done and what you want to do.
    <br>Devote yourself fully to your work. Quietly strong, responsible, and caring. Respected for his strong principles.
    <br>Others are likely to respect and follow them because of their clear vision of how best to serve the common good.
    <br><b>Professional career recommendations:</b> Architectural designers, training managers/trainers, career counselors, psychological counselors, website editors,
    <br>writers, arbitrators, human resources managers, editors/art directors, writers, marketers, interpreters, etc.
    ",
    "INTJ"=>"<b>Your personality traits:</b> Creative thinkers and strong promoters of their own ideas and goals. They have a far-sighted vision and can quickly find meaningful patterns in external events.
    <br>In areas that appeal to them, they have a good ability to organize work and see it through to the end.
    <br>Untrustworthy, critical, independent, determined, with high standards of ability and action.
    <br><b>Professional career recommendations:</b> financial personnel, intellectual property lawyers, design engineers, psychoanalysts, cardiologists, media planners,
    <br>network administrators, economists, technical experts, medical experts, financial experts, inventors, etc.
    ",
    "ISTP"=>"<b>Your personality traits:</b> A calm bystander - few words, self-controlled, observing and analyzing life with unique curiosity and unexpectedly creative humor.
    <br>Often interested in causes and effects, how and why mechanical things work, and organizing facts using logical principles.
    <br>Good at getting to the core of practical problems and finding solutions.
    <br><b>Professional career recommendations:</b> information service industry managers, computer programmers, police officers, software developers,
    <br>paralegals, firefighters, pharmacists, business elites, bank clerks, management consultants, pharmacists, animal trainers, etc.
    ",
    "ISFP"=>"<b>Your personality traits:</b> Shyness, quiet friendliness, sensitivity, harmony, modesty about one's own abilities. Avoid arguments and do not impose your views and values on others.
    <br>Generally speaking, they have no intention of doing leadership work, but they are often loyal followers.
    <br>Because they enjoy the pleasure in front of them, they often relax when things are done and do not want to let excessive urgency and trouble destroy this enjoyment.
    <br><b>Professional career recommendations:</b> customer service specialists, fashion designers, chefs, nurses, dentists,
    <br>tourism managers, garden designers, customer service, surveyors, administrators, etc.
    ",
    "INFP"=>"<b>Your personality traits:</b> Calm observer, idealistic, loyal, emphasizing the consistency between external life and internal values. Have a thirst for knowledge and can quickly identify various possibilities, often playing a role in promoting the implementation of some ideas.
    <br>They are adaptable, flexible and accepting as long as certain values are not threatened.
    <br>A willingness to understand others and understand ways to bring out the best in people. Don't care much about wealth and things around you.
    <br><b>Professional career recommendations:</b> psychologist, human resource management, translator, university teacher (humanities),
    <br>social worker, editor, career planner, fashion designer, massage therapist, consultant, etc.
    ",
    "INTP"=>"<b>Your personality traits:</b> Taciturn. Especially interested in theoretical or scientific pursuits. Loves to use logic and analysis to solve problems.
    <br>Mainly interested in coming up with ideas and not very fond of parties and chatting.
    <br>Prefer hobbies with a clear scope. Seek careers in which some of their special hobbies can be put to use and useful.
    <br><b>Professional career recommendations:</b> software designers, venture capitalists, legal arbitrators, financial analysts, university teachers,
    <br>musicians, website designers, architects, financial analysts, economists, university professors, strategic planners, etc.
    ",
    "ESTP"=>"<b>Your personality traits:</b> Good at solving problems on the spot. Likes action and is happy with any progress. They tend to like mechanical things and sports, and would like to have friends around them.
    <br>Adaptable, tolerant, and pragmatic; focus on achieving results. Don't like to explain too much.
    <br>Most like social things that can be done well, can be mastered, can be analyzed, and can be unified.
    <br><b>Professional career recommendations:</b> entrepreneurs, insurance brokers, civil engineers, tourism management, professional athletes/coaches, video game developers,
    <br>real estate developers, promoters, securities brokers, management consultants, firefighters, police, etc.
    ",
    "ESFP"=>"<b>Your personality traits:</b> Cheerful, easy-going, friendly, like everything and make things more interesting to others because of their preferences. Likes to take action and make things happen.
    <br>They understand what is going on and actively participate. Think it's easier to memorize facts than to master theories.
    <br>Performs best in situations that require extensive knowledge and practical abilities.
    <br><b>Professional career recommendations:</b> preschool teachers, public relations specialists, planning consultants, tourism managers/tour guides,
    <br>promoters, actors, marine biologists, sales, dentists, veterinarians, trainers, financiers, etc.
    ",
    "ENFP"=>"<b>Your personality traits:</b> Extremely enthusiastic, energetic, alert, and imaginative. Able to do almost anything that interests them.
    <br>He can quickly provide solutions to any difficulties and is always ready to help anyone who encounters a problem.
    <br>Often improvise based on their own abilities rather than preparing in advance. Often can find compelling reasons for whatever they want to do.
    <br><b>Professional career recommendations:</b> Advertising account management, management consultant, actor, graphic designer, art director, corporate team trainer, psychologist,
    <br>human resources management, spokesperson, public relations, entrepreneurial mentor, program planner, writer, producer , speaker, etc.
    ",
    "ENTP"=>"<b>Your personality traits:</b> Agile, inventive genius, good at many things. Encouraging companion, alert, outspoken. Any aspect of an issue may be argued out of amusement.
    <br>Resourceful in solving new and challenging problems, but may neglect day-to-day tasks.
    <br>It is easy to shift interests from one point to another. Able to easily find logical reasons for their requests.
    <br><b>Professional career recommendations:</b> entrepreneurs, investment bankers, advertising creative directors,
    <br>marketing management consultants, copywriters, radio/TV hosts, actors, university presidents, inventors, etc.
    ",
    "ESTJ"=>"<b>Your personality traits:</b> Practical and realistic. Because he has a natural business or mechanical mind, he is not interested in abstract theories and hopes to learn so that he can apply them directly and immediately.
    <br>Like to organize and participate in activities; usually can be an excellent leader,
    <br>act decisively and quickly to implement decisions; consider various details of daily affairs.
    <br><b>Professional career recommendations:</b> company CEO, military officer, pharmacist, real estate agent, insurance agent,
    <br>teacher, property management, chief information officer, information director, project manager, etc.
    ",
    "ESFJ"=>"<b>Your personality traits:</b> Enthusiastic, talkative, popular, responsible, natural collaborator, active committee member.
    <br>Requires harmony and may be good at creating it. Always do good things for others.
    <br>Work best when you receive encouragement and praise. The main interest lies in those things that have a direct and obvious impact on people's lives.
    <br><b>Professional career recommendations:</b> real estate agents, retailers, nurses, tally clerks/purchasing, sports coaches, catering industry management,
    <br>tourism management, veterinarians, home health practitioners, human resources consultants, secretaries, etc.
    ",
    "ENFJ"=>"<b>Your personality traits:</b> sensitive, responsible. Genuinely care about what others think and want. Try to give due consideration to other people's feelings when dealing with things.
    <br>Ability to make suggestions or lead group discussions with ease and tact. Sociable, popular, and compassionate.
    <br>Be sensitive to praise and criticism. Loves making things easier and enabling people to reach their potential.
    <br><b>Professional career recommendations:</b> advertising account management, magazine editor, company trainer, TV producer, marketing specialist, writer, social worker
    <br>human resource management, clinician, career planner, university professor, sales manager, IT, reporter, etc.
    ",
    "ENTJ"=>"<b>Your personality traits:</b> straightforward, decisive, leader of various activities. Develop and implement complete systems to solve organizational problems.
    <br>Good at anything that requires argument and witty conversation, such as public speaking.
    <br>Often very knowledgeable and enjoy increasing their knowledge.
    <br><b>Professional career recommendations:</b> company CEOs, management consultants, politicians, real estate developers, educational consultants, investment consultants,
    <br>judges, Internet experts, personal financial consultants, intellectual property lawyers, economic analysts, etc.
    ",
);

$career_industry=array(
        "INTJ"=>"Finance<a class='skill-link' href='skills/S10.html'>(Financial and insurance services)</a>, 
        Scientific research<a class='skill-link' href='skills/S12.html'>(Professional, scientific and technical services)</a>",
        "INTP"=>"Political Science<a class='skill-link' href='skills/S13.html'>(Administrative and Support Services)</a>, 
        Statistics<a class='skill-link' href='skills/S10.html'>(Financial and Insurance Services)</a>",
        "INFJ"=>"Pedagogy<a class='skill-link' href='skills/S15.html'>(Education and training)</a>, 
        Psychology<a class='skill-link' href='skills/S16.html'>(Health care and social assistance)</a>",
        "INFP"=>"Media Studies<a class='skill-link' href='skills/S17.html'>(Arts and Entertainment Services)</a>, 
        Sociology<a class='skill-link' href='skills/S13.html'>(Administrative and Support Services)</a>",
        "ISTJ"=>"Law<a class='skill-link' href='skills/S14.html'>(Public Administration and Security)</a>, 
        Big Data<a class='skill-link' href='skills/S09.html'>(Information Media and Telecommunications)</a>",
        "ISFJ"=>"Medicine<a class='skill-link' href='skills/S16.html'>(Health care and social assistance)</a>, 
        Architecture<a class='skill-link' href='skills/S04.html'>(Construction)</a>",
        "ISTP"=>"Engineering<a class='skill-link' href='skills/S04.html'>(Construction)</a>, 
        Computers<a class='skill-link' href='skills/S09.html'>(Information Media and Telecommunications)</a>",
        "ISFP"=>"Accounting<a class='skill-link' href='skills/S10.html'>(Financial and insurance services)</a>, 
        Music<a class='skill-link' href='skills/S17.html'>(Arts and entertainment services)</a>",
        "ENTJ"=>"Management<a class='skill-link' href='skills/S14.html'>(Public Management and Safety)</a>, 
        Aerospace Engineering<a class='skill-link' href='skills/S02.html'>(Manufacturing)</a>",
        "ENFJ"=>"Pedagogy<a class='skill-link' href='skills/S15.html'>(Education and training)</a>, 
        Law<a class='skill-link' href='skills/S14.html'>(Public administration and security)</a>",
        "ENTP"=>"Economics<a class='skill-link' href='skills/S13.html'>(Financial and Insurance Services)</a>, 
        International Relations<a class='skill-link' href='skills/S14.html'>(Administrative and Support Services)</a>",
        "ESTJ"=>"Business Administration<a class='skill-link' href='skills/S14.html'>(Announcement Management and Safety)</a>, 
        Mechanical Engineering<a class='skill-link' href='skills/S02.html'>(Manufacturing)</a>",
        "ESTP"=>"Business<a class='skill-link' href='skills/S06.html'>(retail, wholesale trade)</a>, 
        Finance<a class='skill-link' href='skills/S10.html'>(Financial and insurance services)</a>",
        "ESFJ"=>"Nursing/Medicine<a class='skill-link' href='skills/S16.html'>(Healthcare and Social Assistance)</a>, 
        Engineering<a class='skill-link' href='skills/S04.html'>(Construction)</a>",
        "ESFP"=>"Education<a class='skill-link' href='skills/S15.html'>(Education and training)</a>, 
        Arts<a class='skill-link' href='skills/S17.html'>(arts and entertainment services)</a>",
);



if($_SERVER['REQUEST_METHOD'] === 'POST') {
        if($_POST["extrovert"]>$_POST["introvert"]){
            $mbti_type = $mbti_type."E";
        }
        else{
            $mbti_type = $mbti_type."I";
        }
        if($_POST["intuitive"]>$_POST["sensing"]){
            $mbti_type = $mbti_type."N";
        }
        else{
            $mbti_type = $mbti_type."S";
        }
        if($_POST["feeling"]>$_POST["thinking"]){
            $mbti_type = $mbti_type."F";
        }
        else{
            $mbti_type = $mbti_type."T";
        }
        if($_POST["judging"]>$_POST["perceiving"]){
            $mbti_type = $mbti_type."J";
        }
        else{
            $mbti_type = $mbti_type."P";
        }

        $result = $career_advice[$mbti_type];
        $industry = $career_industry[$mbti_type];
}
else{
    $result = "<h1 style = 'color: #ac2925'>Please access from personality test.</h1>";
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
    <meta content="width=device-width,initial-scale=1" name="viewport">
    <meta content="description" name="description">
    <meta name="google" content="notranslate" />
    <style>
        .navbar .dropdown-menu {
            background-color: rgba(255, 255, 255, 0.5); /* white with 50% opacity */
            border-radius: 10px;
            max-height: 400px; /* Adjust this value as needed */
            overflow-y: auto;
        }
        .navbar .dropdown-menu li a {
            color: black;
        }
        /* Style for rounding the corners of dropdown items on hover */
        .navbar .dropdown-menu li:hover a {
            background-color: rgba(23, 99, 233, 0.9); /* white with 90% opacity */
            border-radius: 5px;
        }
        /* Style for the text color of dropdown items when hovered */
        .navbar .dropdown-menu li a:hover {
            color: white;
        }
        .skill-link{background-color: #eba5a3}
    </style>


    <!-- Disable tap highlight on IE -->
    <meta name="msapplication-tap-highlight" content="no">


    <link rel="apple-touch-icon" sizes="180x180" href="./css/assets/X-icon.png">
    <link href="./css/assets/X-icon.png" rel="icon">

    <link href="" rel="stylesheet">

    <script type="text/javascript" src="js/main.0cf8b554.js"></script>
    <title>XSalary</title>

    <link href="css/main.550dcf66.css" rel="stylesheet"></head>

<body> <!-- Add your content of header -->
<header>
    <nav class="navbar navbar-default active">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="home.html" title="">
                    <img src="Images/logo.png" height ="80em" class="navbar-logo-img" alt="">
                    XSalary
                </a>
            </div>

            <div class="collapse navbar-collapse" id="navbar-collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="home.html" title="">Home</a></li>
                    <li><a href="profile.html" title="">Future Salary</a></li>
                    <li><a href="personality.html" title="">Personality Test</a></li>
                    <li class="dropdown">
                        <a href class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                           aria-expanded="false">*Skill Set<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="skills/S01.html">Mining</a></li>
                            <li><a href="skills/S02.html">Manufacturing</a></li>
                            <li><a href="skills/S03.html">Electricity, Gas, Water & Waste services</a></li>
                            <li><a href="skills/S04.html">Construction</a></li>
                            <li><a href="skills/S05.html">Wholesale Trade</a></li>
                            <li><a href="skills/S06.html">Retail Trade</a></li>
                            <li><a href="skills/S07.html">Accommodation & Food Services</a></li>
                            <li><a href="skills/S08.html">Transport, Postal & Warehousing</a></li>
                            <li><a href="skills/S09.html">Information Media & Telecommunications</a></li>
                            <li><a href="skills/S10.html">Financial & Insurance Services</a></li>
                            <li><a href="skills/S11.html">Rental, Hiring & Real Estate Services</a></li>
                            <li><a href="skills/S12.html">Professional, Scientific & Technical Services</a></li>
                            <li><a href="skills/S13.html">Administrative & Support Services</a></li>
                            <li><a href="skills/S14.html">Public Administration & Safety</a></li>
                            <li><a href="skills/S15.html">Education & Training</a></li>
                            <li><a href="skills/S16.html">Health Care & Social Assistance</a></li>
                            <li><a href="skills/S17.html">Arts & Recreation Services</a></li>
                        </ul>
                    </li>


                </ul>
            </div>
        </div>
    </nav>
</header>
<!--<script>-->
<!--    document.addEventListener("DOMContentLoaded", function (event) {-->
<!--        navbarFixedTopAnimation();-->
<!--    });-->
<!--</script>-->
<!---->
<!---->
<!--<script>-->
<!--    document.addEventListener("DOMContentLoaded", function (event) {-->
<!--        navActivePage();-->
<!--        scrollRevelation('.reveal');-->
<!--    });-->
<!--</script>-->

<div class="section-container" id="result_section"></div>
<div class="container">
    <div class="col-xs-12 col-md-12">
        <div class="text-center">
            <h2>Your Result</h2>
            <p style="background-color: bisque; color: #1763e9"><?= $result?>
                <br><b>Your suit the  following industry: </b><?=$industry?>
                <br>Please click the link to learn the skills for the industry.
            </p>

        </div>
    </div>
</div>


</body>
<footer class="footer-container white-text-container">
    <div class="container">
        <div class="row">


            <div class="col-xs-12">
                <h3>XSalary</h3>

                <div class="row">
                    <div class="col-xs-12 col-sm-7">
                        <p><small> &copy; 2023 IDers(TP22). All rights reserved. </small>
                        </p>
                    </div>
                </div>


            </div>
        </div>
    </div>
</footer>
</html>
