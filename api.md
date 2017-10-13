# DOMjudge REST API

Welcome to the DOMjudge REST API.
This is API version: 3
running on DOMjudge version: 5.2.0

The supported functions are:

## /domjudge/api/affiliations (GET)
Get a list of affiliations, with for each affiliation: affilid, shortname, name and country.

Optional arguments:

country: ISO 3166-1 alpha-3 country code to search for.
Example usage:
/domjudge/api/affiliations?country=NLD
Required roles: none

## /domjudge/api/categories (GET)
Get a list of all categories/groups.

Optional arguments:

public: only show public data, even for users with more roles
Required roles: none

## /domjudge/api/clarifications (GET)
Get a list of all public clarifications.

Optional arguments:

problem: Search for clarifications about a specific problem.
Example usage:
/domjudge/api/clarifications?problem=H
Required roles: none

## /domjudge/api/config (GET)
Get configuration variables.

Optional arguments:

name: Search only a single config variable.
Example usage:
/domjudge/api/config?name=sourcesize_limit
Required roles: none

## /domjudge/api/contest (GET)
Get information about the current contest: id, shortname, name, start, freeze, unfreeze, length, penalty and end. If more than one contest is active, return information about the first one.

Required roles: none

## /domjudge/api/contests (GET)
Get information about all the current contests: id, shortname, name, start, freeze, unfreeze, length, penalty and end.

Required roles: none

## /domjudge/api/executable (GET)
Get an executable zip file, base64 encoded.

Optional arguments:

execid: Get only the corresponding executable.
Example usage:
/domjudge/api/executable?execid=ignorews
Required roles: jury or judgehost

## /domjudge/api/info (GET)
Get general API information.

Required roles: none

## /domjudge/api/internal_error (POST)
Report an internal error from the judgedaemon.

Optional arguments:

judgingid: ID of the corresponding judging (if exists).
cid: Contest ID.
description: short description
judgehostlog: last N lines of judgehost log
disabled: reason (JSON encoded)
public: only show public data, even for users with more roles
Required roles: none

## /domjudge/api/judgehosts (GET)
Get a list of judgehosts.

Optional arguments:

hostname: Search only for judgehosts with given hostname.
Example usage:
/domjudge/api/judgehosts?hostname=sparehost
Required roles: jury

## /domjudge/api/judgehosts (POST)
Add a new judgehost to the list of judgehosts. Also restarts (and returns) unfinished judgings.

Optional arguments:

hostname: Add this specific judgehost and activate it.
Example usage:
/domjudge/api/judgehosts?hostname=judge007
Required roles: judgehost

## /domjudge/api/judgehosts (PUT)
Update the configuration of a judgehost.

Optional arguments:

active: Activate judgehost?
Required roles: judgehost

## /domjudge/api/judgement_types (GET)
Lists all available judgement types.

Optional arguments:

public: only show public data, even for users with more roles
Required roles: none

## /domjudge/api/judging_runs (POST)
Add a new judging_run to the list of judging_runs. When relevant, finalize the judging.

Optional arguments:

judgingid: Judging_run corresponds to this specific judgingid.
testcaseid: Judging_run corresponding to this specific testcaseid.
runresult: Result of this run.
runtime: Runtime of this run.
output_run: Program output of this run (base64 encoded).
output_diff: Program diff of this run (base64 encoded).
output_error: Program error output of this run (base64 encoded).
output_system: Judging system output of this run (base64 encoded).
judgehost: Judgehost performing this judging
Required roles: judgehost

## /domjudge/api/judgings (GET)
Get all or selected judgings. This includes those post-freeze, so currently limited to jury, or as a team but then restricted your own submissions.

Optional arguments:

cid: Contest ID. If not provided, get judgings of all active contests
result: Search only for judgings with a certain result.
fromid: Search from a certain ID
judgingid: Search only for a certain ID
submitid: Search only for judgings associated to this submission ID
limit: Get only the first N judgings
Example usage:
/domjudge/api/judgings?cid=2
/domjudge/api/judgings?result=correct
/domjudge/api/judgings?fromid=800&limit=10
Required roles: jury or team

## /domjudge/api/judgings (POST)
Request a new judging to be judged.

Optional arguments:

judgehost: Judging is to be judged by this specific judgehost.
Required roles: judgehost

## /domjudge/api/judgings (PUT)
Update a judging.

Optional arguments:

judgingid: Judging corresponds to this specific judgingid.
judgehost: Judging is judged by this specific judgehost.
compile_success: Did the compilation succeed?
output_compile: Ouput of compilation phase (base64 encoded).
Required roles: judgehost

## /domjudge/api/languages (GET)
Get a list of all suported programming languages.

Required roles: none

## /domjudge/api/problems (GET)
Get a list of problems in a contest, with for each problem: id, shortname, name and colour.

Optional arguments:

cid: Contest ID.
Example usage:
/domjudge/api/problems?cid=2
Required roles: none

## /domjudge/api/queue (GET)
Get a list of all queued submission ids.

Optional arguments:

limit: Get only the first N queued submissions
Example usage:
/domjudge/api/queue?limit=10
Required roles: jury or judgehost

## /domjudge/api/scoreboard (GET)
Get the scoreboard. Returns scoreboard for jury members if authenticated as a jury member (and public is not 1).

Optional arguments:

cid: ID of the contest to get the scoreboard for.
category: ID of a single category to search for.
affiliation: ID of an affiliation to search for.
country: ISO 3166-1 alpha-3 country code to search for.
public: only show public data, even for users with more roles
Example usage:
/domjudge/api/scoreboard?cid=2&category=1&affiliation=UU
/domjudge/api/scoreboard?cid=2&country=NLD
Required roles: none

## /domjudge/api/submission_files (GET)
Get a list of all submission files. The file contents will be base64 encoded.

Optional arguments:

id: Get only the corresponding submission files.
Example usage:
/domjudge/api/submission_files?id=3
Required roles: jury or judgehost

## /domjudge/api/submissions (GET)
Get a list of all valid submissions.

Optional arguments:

cid: Contest ID. If not provided, get submissions of all active contests
language: Search only for submissions in a certain language.
id: Search only a certain ID
fromid: Search from a certain ID
limit: Get only the first N submissions
Example usage:
/domjudge/api/submissions?fromid=100&limit=10
/domjudge/api/submissions?language=cpp
Required roles: none

## /domjudge/api/submissions (POST)
Post a new submission. You need to be authenticated with a team role. Returns the submission id. This is used by the submit client. A trivial command line submisson using the curl binary could look like this: curl -n -F "shortname=hello" -F "langid=c" -F "cid=2" -F "code[]=@test1.c" -F "code[]=@test2.c" http://localhost/domjudge/api/submissions

Optional arguments:

code[]: Array of source files to submit
shortname: Problem shortname
langid: Language ID
contest: Contest short name. Required if more than one contest is active
Required roles: team

## /domjudge/api/teams (GET)
Get a list of teams containing teamid, name, group and affiliation.

Optional arguments:

category: ID of a single category/group to search for.
affiliation: ID of an affiliation to search for.
teamid: Search for a specific team.
public: only show public data, even for users with more roles
Example usage:
/domjudge/api/teams?category=1&affiliation=UU
Required roles: none

## /domjudge/api/testcase_files (GET)
Get a testcase file, base64 encoded.

Optional arguments:

testcaseid: Get only the corresponding testcase.
input: Get the input file.
output: Get the output file.
Example usage:
/domjudge/api/testcase_files?testcaseid=3&input=1
Required roles: jury or judgehost

## /domjudge/api/testcases (GET)
Get a testcase.

Optional arguments:

judgingid: Get the next-to-judge testcase for this judging.
Required roles: jury or judgehost

## /domjudge/api/user (GET)
Get information about the currently logged in user. If no user is logged in, will return null for all values.

Required roles: none
