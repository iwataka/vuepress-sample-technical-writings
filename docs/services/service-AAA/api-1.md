# Service AAA: API 1

[[toc]]

## Input

|No|Object|Field|
|---|---|---|
|1|Entity1|foo|

## Output

nothing (just modify data and exit)

## Flowchart

@startuml
start

:Process A;

:Process B;

if (condition A) then (true)
    :Process C;
else (false)
    stop
    note right
        Exit code: 1
    endnote
endif

stop
@enduml

## Details

### Process A

### Process B

### Process C
