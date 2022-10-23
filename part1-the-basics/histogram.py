def main():
    count = [0]*10
    data = '9,8,4,3,5,5,1,1,5,8,9,7,7,7,6'

    for line in data.split(','):
        count[int(line)] = count[int(line)] + 1

    idx = 0
    for num in count:
        print(idx, " occured ", num, " times.")
        idx += 1

main()
